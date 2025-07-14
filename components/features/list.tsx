import { FEATURE_STYLES, FEATURES_CONTENT } from "@/constants";
import { FeatureItem } from "./list-item";

export function FeatureList() {
  return (
    <div className={FEATURE_STYLES.featuresContainer}>
      {FEATURES_CONTENT.features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} index={index} />
      ))}
    </div>
  );
}
