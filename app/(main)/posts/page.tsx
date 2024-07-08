import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";

const PostsPage = () => {
  return (
    <div>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostPagination />
    </div>
  );
};

export default PostsPage;
