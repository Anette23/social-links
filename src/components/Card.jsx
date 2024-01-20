import SocialLink from "./SocialLink";
import avatar from "../assets/images/avatar-jessica.jpeg";

const Card = () => {
  return (
    <section className="text-text bg-darkGrey rounded-xl p-6 md:p-8 flex flex-col items-center gap-5 text-center">
      <article>
        <img
          src={avatar}
          width={80}
          alt="avatar of Jessica"
          className="rounded-full"
        />
      </article>
      <article>
        <h1 className="mb-2 text-2xl font-semibold">Jessica Randall</h1>
        <p className="text-primary font-semibold">London, United Kingdom</p>
      </article>
      <article>
        <p>"Front-end developer and avid reader."</p>
      </article>
      <article>
        <SocialLink />
      </article>
    </section>
  );
};

export default Card;
