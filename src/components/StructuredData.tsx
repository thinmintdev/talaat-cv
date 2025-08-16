import {
  generateLocalBusinessStructuredData,
  generatePersonStructuredData,
} from "@/lib/structured-data";

export function StructuredData() {
  const personStructuredData = generatePersonStructuredData();
  const businessStructuredData = generateLocalBusinessStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessStructuredData),
        }}
      />
    </>
  );
}