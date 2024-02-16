import Layout from "@/components/template/Layout";
import ProfileCard from "@/components/template/ProfileCard";
import "@/styles/globals.css";

const News = () => {    
    return (
        <Layout title="Profile" subtitle="User Profile Page">
            <div className={`flex items-center justify-center content-center h-full`}>
                <ProfileCard />
            </div>
        </Layout>
    );
};

export default News;