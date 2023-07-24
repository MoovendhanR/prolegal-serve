import { Image } from '@mantine/core';


export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <Image width={220} height={80} fit="contain" src={"https://www.prolegalserve.com/wp-content/uploads/2023/02/Pro-Legal-Serve-Logo.png"}/>
    );
  }