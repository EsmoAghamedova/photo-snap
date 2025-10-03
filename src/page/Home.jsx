import { Header } from "../components/Header";
import { MainRow } from '../components/MainRow';

export default function Home() {
    return (
        <>
            <Header />
            <MainRow
  dark
  title="CREATE AND SHARE YOUR PHOTO STORIES."
  description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
  buttonText="GET AN INVITE"
  buttonType="invite"
  buttonHref="#"
//   imageSrc={img1}
  imageAlt="Man standing on dock by lake"
/>
        </>
    );
}