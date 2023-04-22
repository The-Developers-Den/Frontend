import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto min-h-[80vh]  text-center py-5">
      <h1 className="font-otf text-2xl my-5">About</h1>
      <h2 className="font-monument_reg text-xs my-5 w-[55%] max-md:w-full mx-auto">
        Roller DAO is a decentralized crowdfunding platform, built and executed
        as a Roll up in the Cartesi ecosystem. Roller Dao aims to be a tool that
        unites Creators and Sponsors in a decentralized manner. By using the
        platform, creators will be able to submit their ideas to the public and
        raise funds to achieve their goals. Sponsors will be able to participate
        in the projects they found interesting, and help them to become a
        reality.
        <br /> <br /> Roller DAO allows creators to look for funding to develop
        their projects. In order to do this, they submit a summary of how the
        project is going to work and the necessary steps to make it happen. They
        set their project’s funding goal and deadline. Users in the role of
        sponsors or backers, are able to support creators&#39; ideas, by linking
        their wallets and locking their RLD tokens to the project to help make
        the creator idea come true, this must be done within the deadline
        previously established. If the project succeeds in reaching its funding
        goal, tokens will be given to the creator in different stages, stated
        previously and according to the project development. Sponsors will be
        rewarded with different benefits by creators. This will be established
        beforehand by creators.
        <br /> <br /> If the project doesn’t succeed in reaching its funding
        goal, tokens will be returned to backers. Creators will be allowed to
        upload their projects to the platform, projects will be pre listed and
        after going through vote by members of the community/Dao, if the vote is
        positive they will be listed in the platform or they will go to a
        waiting list, if negative.
      </h2>
    </div>
  );
};

export default About;
