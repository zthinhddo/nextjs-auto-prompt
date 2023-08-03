import Feed from "@components/Feed";

const Home = () => {
    return (
      <section className="w-full flex-col flex-center items-center">
        <h1 className="head_text text-center">
          Sample title
          <br/>
          <span className="orange_gradient">AI-Powered prompt</span>
        </h1>
        <p className="desc text-center">
            Auto prompt generator help you create text by using AI (Chat GPT) to boost your productivity
        </p>

        <Feed />
      </section>
    );
}

export default Home;