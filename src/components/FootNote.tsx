export default function FootNote({
  address,
  company,
}: {
  address: string;
  company: string;
}) {
  return (
    <div className="content row">
      <p>
        © Creatify Ltd {address} {company}
      </p>
      <style jsx>
        {`
          div {
            margin-top: 200px;
          }
          p {
            font-size: 85%;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
}
