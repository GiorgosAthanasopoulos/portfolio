import Image from 'next/image';
import Link from 'next/link';

type SocialIconProps = {
    href: string;
    src: string;
    alt: string;
    dark: boolean;
}

export default function SocialIcon({
    href,
    src,
    alt,
    dark,
}: SocialIconProps): JSX.Element {
    return (
        <Link
            href={href}
            target="_blank"
        >
            <Image
                src={src}
                alt={alt}
                width='32'
                height='32'
                className='bg-gray-400 p-1 rounded-xl'
            />
        </Link>
    );
}
