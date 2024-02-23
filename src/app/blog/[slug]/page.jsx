import styles from "./singlePost.module.css";
import Image from "next/image"

const singlePostPage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image src="/p3.png" width={200} height={200} alt="" fil className={styles.img}/>

            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                    className={styles.avatar}
                    src="/noavatar.png" alt="avatar"
                    width={60}
                    height={30}
                    
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Handsome</span>
                    </div>
                    <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default singlePostPage;