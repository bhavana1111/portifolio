import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Bhavana Kondeti
      </h1>
      <p className="mb-4">
        {`I'm Bhavana Kondeti currently working as a `}
        <span className="font-bold text-indigo-600">
          Research Assistant at UTSA
        </span>
        {`, with prior experience as a developer. My expertise spans frontend development, particularly as a JavaScript and React developer, as well as backend development with C# and .NET. I am also involved in cutting-edge projects utilizing Large Language Models (LLMs). Passionate about technology and solving complex problems, I am always eager to learn and contribute to innovative solutions in the ever-evolving tech world.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
