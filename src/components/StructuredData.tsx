import {
  generateLocalBusinessStructuredData,
  generatePersonStructuredData,
} from "@/lib/structured-data";

export function StructuredData() {
  const personStructuredData = generatePersonStructuredData();
  const businessStructuredData = generateLocalBusinessStructuredData();

  return (
    <>
  <script type="application/ld+json">{JSON.stringify(personStructuredData)}</script>
  <script type="application/ld+json">{JSON.stringify(businessStructuredData)}</script>
    </>
  );
}
