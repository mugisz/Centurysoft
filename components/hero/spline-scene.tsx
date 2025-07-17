"use client";
import Spline from "@splinetool/react-spline";
import {
  memo,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface SplineSceneProps {
  isVisible?: boolean;
  quality?: "low" | "medium" | "high";
  enableInteraction?: boolean;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

const useIntersectionObserver = (
  containerRef: React.RefObject<HTMLDivElement>
) => {
  const [shouldRender, setShouldRender] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !shouldRender) {
          setShouldRender(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [shouldRender, containerRef]);

  return shouldRender;
};

const getQualitySettings = (quality: SplineSceneProps["quality"]) => {
  const settings = {
    low: {
      antialias: false,
      shadows: false,
      quality: 0.5,
      pixelRatio: Math.min(window.devicePixelRatio, 1.5),
    },
    medium: {
      antialias: true,
      shadows: true,
      quality: 0.75,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    },
    high: {
      antialias: true,
      shadows: true,
      quality: 1,
      pixelRatio: window.devicePixelRatio,
    },
  };
  return settings[quality || "medium"];
};

const LoadingFallback = memo(() => (
  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-900 to-gray-800">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-white text-sm">Loading 3D Scene...</p>
    </div>
  </div>
));

const ErrorFallback = memo(() => (
  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-900 to-gray-800">
    <div className="text-center">
      <div className="text-red-400 text-2xl mb-2">⚠️</div>
      <p className="text-white text-sm">Failed to load 3D scene</p>
    </div>
  </div>
));

const SplineContent = memo(
  ({
    quality,
    enableInteraction,
    isVisible,
  }: Pick<SplineSceneProps, "quality" | "enableInteraction" | "isVisible">) => {
    const splineRef = useRef<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const onLoad = useCallback(
      (splineApp: any) => {
        splineRef.current = splineApp;
        setIsLoaded(true);

        const qualitySettings = getQualitySettings(quality);

        if (splineApp.renderer) {
          splineApp.renderer.setPixelRatio(qualitySettings.pixelRatio);
          splineApp.renderer.antialias = qualitySettings.antialias;
          splineApp.renderer.shadowMap.enabled = qualitySettings.shadows;
        }
      },
      [quality]
    );

    const onError = useCallback(() => {
      setHasError(true);
      console.warn("Spline scene failed to load");
    }, []);

    const toggleAnimation = useCallback((play: boolean) => {
      if (splineRef.current?.setVariable) {
        splineRef.current.setVariable("animationEnabled", play);
      }
    }, []);

    useEffect(() => {
      toggleAnimation(isVisible as boolean);
    }, [isVisible, toggleAnimation]);

    useEffect(() => {
      return () => {
        if (splineRef.current?.dispose) {
          splineRef.current.dispose();
        }
        splineRef.current = null;
      };
    }, []);

    if (hasError) {
      return <ErrorFallback />;
    }

    return (
      <Spline
        scene="https://prod.spline.design/c9-3wEj3Hu7yPDQs/scene.splinecode"
        onLoad={onLoad}
        onError={onError}
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: enableInteraction ? "auto" : "none",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    );
  }
);

SplineContent.displayName = "SplineContent";

export const SplineScene = memo(
  ({
    isVisible = true,
    quality = "medium",
    enableInteraction = true,
  }: SplineSceneProps) => {
    const isMobile = useIsMobile();
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldRender = useIntersectionObserver(containerRef);

    if (isMobile) {
      return null;
    }

    return (
      <div
        ref={containerRef}
        className="absolute top-[-180px] sm:top-[-10%] left-0 w-full h-full z-0"
      >
        <Suspense fallback={<LoadingFallback />}>
          {shouldRender && (
            <SplineContent
              quality={quality}
              enableInteraction={enableInteraction}
              isVisible={isVisible}
            />
          )}
        </Suspense>
      </div>
    );
  }
);

SplineScene.displayName = "SplineScene";
