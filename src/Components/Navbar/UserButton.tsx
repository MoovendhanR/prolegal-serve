import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
} from '@mantine/core';
import { IconChevronDown,IconBell } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'flex',
    width: '100%',
    // padding: theme.spacing.md,
    // color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    // '&:hover': {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    // },
  },

  userdetails:{
    display:"flex",
    flexDirection: "row",
    gap:"1rem",
  }
}));

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export function UserButton({ image, name, icon, ...others }: UserButtonProps) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group className={classes.userdetails}>
        {icon||<IconBell color={"orange"} stroke={1.5}/>}
        <Avatar src={image} radius="xl" />
         <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>        
        </div>

        {icon || <IconChevronDown size="0.9rem" stroke={1.5} />}
      </Group>
    </UnstyledButton>
  );
}