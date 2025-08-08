import Image from "next/image";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      image: "/img/news/news-vds-01.svg",
      title: "Employee Health Workshop",
      description:
        "VDS regularly organizes health and wellness workshops to promote well-being and a better quality of life for our employees.",
      link: "#",
    },
    {
      id: 2,
      image: "/img/news/news-vds-02.svg",
      title: "Community Engagement",
      description:
        "Our teams actively participate in local community projects, strengthening relationships and building a better society.",
      link: "#",
    },
    {
      id: 3,
      image: "/img/news/news-vds-03.svg",
      title: "Annual Employee Training",
      description:
        "Ongoing training programs are held to enhance the skills and knowledge of our workforce for continued professional growth.",
      link: "#",
    },
  ];

  return (
    <section className="border-0 m-0" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-5">
        <div className="row justify-center text-center mb-4">
          <div className="col-lg-8">
            <h2 className="font-bold mb-3 text-4xl text-gray-900">
              News & Activities
            </h2>
            <p className="text-4 text-gray-600 leading-relaxed">
              Discover the latest news and activities at VDS, including company
              updates, staff development, and our involvement in the wider
              business community.
            </p>
          </div>
        </div>

        <div className="row">
          {news.map((item, index) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <article className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-bold mb-3 text-xl">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-primary transition-colors duration-300 no-underline"
                    >
                      {item.title}
                    </a>
                  </h4>

                  <p className="mb-4 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300 inline-flex items-center group/link"
                  >
                    Read More
                    <i className="fas fa-arrow-right ml-2 text-sm transition-transform duration-300 group-hover/link:translate-x-1"></i>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
