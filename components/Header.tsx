import Link from "next/link";
const ProfileLink = props => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.name}'s profile</a>
    </Link>
  </div>
);
const Header = (props) => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <ProfileLink profile={'test'} />
    </header>
  );
};
export default Header;
