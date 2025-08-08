import Image from "next/image";

export default function SolutionsOverview() {
  return (
    <div className="container">
      <div className="row pt-5 mt-3 pb-3">
        <div className="col-lg-12">
          <p className="font-weight-medium text-4">
            VDS Business Center Co., Ltd. is a leading provider of workforce and
            manpower solutions in Thailand. With over 22 years of industry
            experience, we specialize in recruitment, outsourcing, and labor
            consulting for both Thai and foreign workers. Our commitment to
            quality and professionalism has earned the trust of leading
            manufacturers and businesses across diverse industries. At VDS, we
            connect organizations with the right people quickly, efficiently,
            and reliably to help our clients achieve their business goals and
            stay ahead in today&apos;s competitive market.
          </p>
        </div>
        {/* <div className="col-lg-4">
          <div className="position-relative">
            <Image
              src="/img/solutions/vds-overview.jpg"
              alt="VDS Solutions Overview"
              width={400}
              height={300}
              className="img-fluid rounded"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
