import { useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router

const IndexPage = () => {
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Redirect to the home page immediately when the component mounts
    router.push("/home");
  }, [router]); // The useEffect hook runs once when the component mounts

  return null; // No UI is rendered on the index page since we just need the redirection
};

export default IndexPage;
