import ContentLoader from 'react-content-loader';

const Skeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={350}
            height={426}
            viewBox="0 0 350 426"
            backgroundColor="#d9d9d9"
            foregroundColor="#00AEC59E">
            <rect x="-2" y="-5" rx="5" ry="5" width="362" height="343" />
            <rect x="21" y="367" rx="5" ry="5" width="133" height="29" />
            <rect x="224" y="367" rx="5" ry="5" width="107" height="28" />
            <rect x="346" y="332" rx="0" ry="0" width="77" height="93" />
            <rect x="356" y="342" rx="0" ry="0" width="77" height="93" />
            <rect x="-20" y="330" rx="0" ry="0" width="24" height="96" />
            <rect x="-2" y="422" rx="0" ry="0" width="352" height="37" />
        </ContentLoader>
    );
};
export default Skeleton;
