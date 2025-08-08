import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    { id: 1, logo: "/img/clients/1.svg", name: "Client 1", maxWidth: "120px" },
    { id: 2, logo: "/img/clients/2.svg", name: "Client 2", maxWidth: "100px" },
    { id: 3, logo: "/img/clients/3.svg", name: "Client 3", maxWidth: "100px" },
    { id: 4, logo: "/img/clients/4.svg", name: "Client 4", maxWidth: "100px" },
    { id: 5, logo: "/img/clients/5.svg", name: "Client 5", maxWidth: "100px" },
    { id: 6, logo: "/img/clients/6.svg", name: "Client 6", maxWidth: "100px" },
  ];

  return (
    <section className="border-0 bg-light m-0 p-0">
      <div className="container py-5 mt-4">
        <div className="row items-center text-center">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`col-6 col-sm-4 col-lg-2 mb-5 ${
                index >= 4 ? "mb-sm-0" : "mb-lg-0"
              }`}
            >
              <div className="relative h-16 flex items-center justify-center group">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain transition-all duration-300 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                  style={{
                    maxWidth: client.maxWidth,
                    height: "auto",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
