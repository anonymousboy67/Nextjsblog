import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/p3.png" width={200} height={200} alt="" fil className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>

       
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>DES</p>
        <Link href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
