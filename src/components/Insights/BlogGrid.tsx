"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  slug: string;
  excerpt?: string;
  date?: string;
  author?: string;
  category?: string;
}

// Blog posts ตรงกับ HTML เดิม พร้อมข้อมูลเพิ่มเติม
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Amazing Mountain",
    image: "/img/blog/medium/blog-1.jpg",
    slug: "amazing-mountain",
    excerpt:
      "Discover the breathtaking beauty of mountain landscapes and their impact on business inspiration and team building activities.",
    date: "2024-12-15",
    author: "VDS Team",
    category: "Business Insights",
  },
  {
    id: 2,
    title: "Creative Business",
    image: "/img/blog/medium/blog-2.jpg",
    slug: "creative-business",
    excerpt:
      "Exploring innovative business strategies and creative approaches to workforce management in the modern economy.",
    date: "2024-12-12",
    author: "Creative Team",
    category: "Innovation",
  },
  {
    id: 3,
    title: "Unlimited Ways",
    image: "/img/blog/medium/blog-3.jpg",
    slug: "unlimited-ways",
    excerpt:
      "Understanding the unlimited possibilities in workforce solutions and how to leverage diverse talent pools.",
    date: "2024-12-10",
    author: "Strategy Team",
    category: "Strategy",
  },
  {
    id: 4,
    title: "Developer Life",
    image: "/img/blog/medium/blog-4.jpg",
    slug: "developer-life",
    excerpt:
      "A deep dive into the life of developers and how technology professionals contribute to industrial growth.",
    date: "2024-12-08",
    author: "Tech Team",
    category: "Technology",
  },
  {
    id: 5,
    title: "The Blue Sky",
    image: "/img/blog/medium/blog-5.jpg",
    slug: "the-blue-sky",
    excerpt:
      "Looking towards the future of workforce management with optimism and innovative solutions.",
    date: "2024-12-05",
    author: "Vision Team",
    category: "Future",
  },
  {
    id: 6,
    title: "Night Life",
    image: "/img/blog/medium/blog-6.jpg",
    slug: "night-life",
    excerpt:
      "Exploring shift work management and night operations in industrial settings for maximum efficiency.",
    date: "2024-12-03",
    author: "Operations Team",
    category: "Operations",
  },
  {
    id: 7,
    title: "Another World Perspective",
    image: "/img/blog/medium/blog-7.jpg",
    slug: "another-world-perspective",
    excerpt:
      "Gaining global perspectives on workforce management and international business practices.",
    date: "2024-12-01",
    author: "Global Team",
    category: "Global",
  },
  {
    id: 8,
    title: "The Creative Team",
    image: "/img/blog/medium/blog-8.jpg",
    slug: "the-creative-team",
    excerpt:
      "Showcasing the creative minds behind our innovative workforce solutions and their collaborative processes.",
    date: "2024-11-28",
    author: "Creative Directors",
    category: "Team",
  },
  {
    id: 9,
    title: "Alone on the Forest",
    image: "/img/blog/medium/blog-9.jpg",
    slug: "alone-on-the-forest",
    excerpt:
      "Sometimes the best insights come from solitude and reflection on nature's lessons for business leadership.",
    date: "2024-11-25",
    author: "Leadership Team",
    category: "Leadership",
  },
];

// Helper function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogGrid() {
  return (
    <div className="container py-4">
      <div className="row">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-12 col-sm-6 col-lg-4 mb-4">
            <article className="post post-medium border-0 pb-0 mb-5">
              <div className="post-image">
                <Link href={`/insights/${post.slug}`}>
                  <Image
                    src={post.image}
                    className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0"
                    alt={post.title}
                    width={400}
                    height={266}
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "3/2",
                    }}
                  />
                </Link>
              </div>
              <div className="post-content">
                {/* Post Meta - เพิ่มข้อมูล date, author, category */}
                {/* {(post.date || post.author || post.category) && (
                  <div className="post-meta mb-2">
                    {post.date && (
                      <span className="text-color-grey text-1 me-3">
                        <i className="far fa-calendar-alt me-1"></i>
                        {formatDate(post.date)}
                      </span>
                    )}
                    {post.author && (
                      <span className="text-color-grey text-1 me-3">
                        <i className="far fa-user me-1"></i>
                        {post.author}
                      </span>
                    )}
                    {post.category && (
                      <span className="text-color-primary text-1">
                        <i className="far fa-folder me-1"></i>
                        {post.category}
                      </span>
                    )}
                  </div>
                )} */}

                {/* Post Title */}
                <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2">
                  <Link
                    href={`/insights/${post.slug}`}
                    className="text-decoration-none text-color-dark text-color-hover-primary"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Post Excerpt - เพิ่มคำอธิบายสั้นๆ */}
                {post.excerpt && (
                  <p className="text-3-5 pr-2 mb-3">{post.excerpt}</p>
                )}

                {/* Read More Link - เพิ่มลิงก์อ่านต่อ */}
                <Link
                  href={`/insights/${post.slug}`}
                  className="read-more text-color-primary font-weight-semibold text-2 text-uppercase d-inline-flex align-items-center"
                >
                  Read More
                  <i className="fas fa-angle-right position-relative top-1 ms-1"></i>
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Pagination ตรงกับ HTML เดิม */}
      <div className="row">
        <div className="col">
          <ul className="pagination float-end">
            <li className="page-item">
              <Link className="page-link" href="#" aria-label="Previous">
                <i className="fas fa-angle-left"></i>
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" href="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#" aria-label="Next">
                <i className="fas fa-angle-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
