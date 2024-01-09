import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
    return (
        <div>
            <div>이 페이지는 존지하지 않습니다.</div>
            <Link href="/">홈으로 이동</Link>
        </div>
    )
}

export default NotFound;