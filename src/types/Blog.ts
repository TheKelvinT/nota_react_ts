import { PortableTextBlock } from "sanity";

// export
export type BlogHeroModel = {
  blogDesc: string;
  title: string;
  featured: {
    title: string;
    summary: PortableTextBlock[];
    _createdAt: string | number | Date;
    slug: string;
  };
  image: string;
  header: string;
};
export type BlogPostModel = {
    title: string;
    slug: string;
    image: string;
    content: {
      _key: string;
      markDefs: {
        _type: "link";
        href: string;
        _key: string;
      }[];
      children: {
        _type: "span";
        marks: string[];
        text: string;
        _key: string;
      }[];
      _type: "block";
      style: string;
    }[];
    _id: string;
    _createdAt: string;
    summary: {
      children: {
        _type: "span";
        marks: string[];
        text: string;
        _key: string;
      }[];
      _type: "block";
      style: string;
      _key: string;
      markDefs: {
        _key: string;
        _type: "link";
        href: string;
      }[];
    }[];
};

export type SingleBlogModel = {
  title?: string;
  image?: string;
  content?: PortableTextContent[] | any[];
  _createdAt?: Date | undefined;
};

export type PortableTextContent = {
  _key: string;
  _type: 'block';
  children: PortableTextSpan[];
  markDefs?: PortableTextMarkDef[];
  style: string;
};

export type PortableTextSpan = {
  _key: string;
  _type: 'span';
  text: string;
  marks?: string[];
};

export type PortableTextMarkDef = {
  _type: 'link';
  href: string;
  _key: string;
};
