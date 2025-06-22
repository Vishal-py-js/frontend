import React from "react";
import { Typography, Card, CardMedia, Chip } from "@mui/material";

const blogPosts = [
  {
    title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary",
    date: "November 22, 2023",
    author: "Admin",
    tag: "Sound",
    image: "assets/images/blogs/blog1.png",
  },
  {
    title: "BMW X6 M50i is designed to exceed your sportiest.",
    date: "November 22, 2023",
    author: "Admin",
    tag: "Accessories",
    image: "assets/images/blogs/blog2.png",
  },
  {
    title: "BMW X5 Gold 2024 Sport Review: Light on Sport",
    date: "November 22, 2023",
    author: "Admin",
    tag: "Exterior",
    image: "assets/images/blogs/blog3.png",
  },
];

const BlogPostsSection = () => {
  return (
    <div className="px-8 py-12 bg-white">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="font-bold text-gray-900">
          Latest Blog Posts
        </Typography>
        <a
          //href="#"
          className="text-sm text-gray-500 hover:underline flex items-center"
        >
          View All <span className="ml-1">↗</span>
        </a>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="rounded-xl overflow-hidden bg-white hover:shadow-md transition-all"
            sx={{
                '.MuiChip-root':{
                    backgroundColor: "white"
                }
            }}
          >
            <div className="relative">
              <CardMedia
                component="img"
                height="180"
                image={post.image}
                alt={post.title}
                className="object-cover"
              />
              <Chip
                label={post.tag}
                size="small"
                className="!absolute top-2 left-2 text-xs font-medium"
                
              />
            </div>
            <div className="p-4">
              <Typography variant="caption" className="text-gray-500">
                {post.author} • {post.date}
              </Typography>
              <Typography
                variant="subtitle1"
                className="mt-2 font-medium text-gray-900 leading-snug"
              >
                {post.title}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsSection;
