import data from "../data";
const SocialLink = () => {
  return (
    <>
      {data.map((link) => (
        <article
          key={link.id}
          className="bg-grey mb-4 last:mb-0 rounded-xl py-3 px-20 md:px-24 transition-colors duration-500 hover:bg-primary hover:text-background cursor-pointer "
        >
          {" "}
          <a href={link.address} className="font-semibold">{link.site}</a>
        </article>
      ))}
    </>
  );
};

export default SocialLink;
