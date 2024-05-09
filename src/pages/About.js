import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About" description="This is the About page">
      <div className="text-center mt-5">
        <h1>About</h1>
        <p>
          At Shop A2Z, we believe that style should be effortless, affordable,
          and inclusive. We are an online clothing store that aims to bring you
          the latest and trendiest fashion pieces from A to Z, all in one
          convenient place. Whether you're looking for chic everyday wear,
          glamorous party outfits, or comfortable loungewear, we have got you
          covered!
        </p>
        <br></br>
        <p>
          Get ready to embark on a thrilling fashion adventure at Shop A2Z.
          Whether you're searching for a statement piece or a wardrobe
          essential, we guarantee you'll find something that sparks joy and
          enhances your style.
        </p>
        <p>
          Thank you for choosing Shop A2Z as your go-to online fashion
          destination. Happy shopping! For any inquiries or assistance, please
          don't hesitate to reach out to our customer support team at
          support@shopaz.com. <br></br><br></br><div style={{fontWeight: "bold" }}>Shop A2Z - Fashion from A to Z, Your Way!</div>
        </p>
      </div>
    </Layout>
  );
};

export default About;
