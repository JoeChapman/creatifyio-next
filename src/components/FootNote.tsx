export default function FootNote({
  address,
  company
}: {
  address: string;
  company: string;
}) {
  return (
    <p>
      © Creatify Ltd {address} {company}
    </p>
  );
}
