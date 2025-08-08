"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  content: string;
}

interface InsightsDetailContentProps {
  post: BlogPost;
}

export default function InsightsDetailContent({
  post,
}: InsightsDetailContentProps) {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <div className="blog-posts single-post">
            <article className="post post-large blog-single-post border-0 m-0 p-0">
              {/* Post Image - ตรงกับ HTML เดิม */}
              <div className="post-image ms-0">
                <Link href="insights_detail.html">
                  <Image
                    src={post.image}
                    className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0"
                    alt={post.title}
                    width={1200}
                    height={600}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    priority
                  />
                </Link>
              </div>

              {/* Post Content - ตรงกับ HTML เดิม */}
              <div className="post-content ms-0">
                {/* Post Title */}
                <h2 className="font-weight-semi-bold">
                  <Link href="insights_detail.html">{post.title}</Link>
                </h2>

                {/* Post Meta - ตรงกับ HTML เดิม */}
                <div className="post-meta">
                  <span>
                    <i className="far fa-calendar"></i> {post.date}
                  </span>
                  <span>
                    <i className="far fa-user"></i> {post.author}
                  </span>
                </div>

                {/* Post Content - แสดงเนื้อหาตรงกับ HTML เดิม */}
                <div
                  className="post-body"
                  dangerouslySetInnerHTML={{
                    __html: post.content,
                  }}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
