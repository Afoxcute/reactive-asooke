import React from 'react';
import { Link } from 'react-router-dom';

const ContentsPage: React.FC = () => {
    // useEffect(() => {

    //     document.body.style.backgroundColor = 'hsla(210, 50%, 90%, 0.8)';
    //     document.body.style.backgroundImage = 'url("https://landing-page-backend.s3.ap-south-1.amazonaws.com/blog_page_prodimages/00894449-ff02-4203-a9b3-7e223e0198c3/shutterstock_1852674685-1_lar.png")';
    //     document.body.style.backgroundSize = 'cover';
    //     document.body.style.backgroundPosition = 'center';

    //     return () => {
    //         document.body.style.backgroundColor = '';
    //         document.body.style.backgroundImage = '';
    //         document.body.style.backgroundSize = '';
    //         document.body.style.backgroundPosition = '';
    //     };
    // }, []);

    return (
        <div style={styles.container} >
            <h1 style={{ ...styles.h1, fontWeight: 'bold' }}>Contents</h1>
            <h2 style={{ ...styles.h2, fontWeight: 'bold' }}>
                <Link to="/articles" style={styles.link}>Articles</Link>
            </h2>
            <ul id="articles" style={styles.ul}>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
            </ul>

            <h2 style={{ ...styles.h2, fontWeight: 'bold' }}>
                <Link to="/blogs" style={styles.link}>Blogs</Link>
            </h2>
            <ul id="blogs" style={styles.ul}>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
            </ul>

            <h2 style={{ ...styles.h2, fontWeight: 'bold' }}>
                <Link to="/videos" style={styles.link}>Videos</Link>
            </h2>
            <ul id="videos" style={styles.ul}>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
                <li style={styles.li}></li>
            </ul>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: '800px',
        margin: 'auto',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    h1: {
        textAlign: 'center',
    },
    h2: {
        color: '#333',
    },
    ul: {
        listStyleType: 'none',
        padding: 0,
    },
    li: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
    },
    link: {
        textDecoration: 'none', 
        color: '#333', 
    },
};

export default ContentsPage;
