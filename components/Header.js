import { Heading, Center, Text, Button, Box} from '@chakra-ui/react'
import styles from '../styles/Header.module.css'
import { RiInstagramLine } from 'react-icons/ri'
 
export default function Header() {
    return (
        <>
        <div className={styles.main} >
            <Text as="samp" fontSize="6xl">Kelas 8G</Text>
            <Box color="white">
            <Button leftIcon={<RiInstagramLine />} marginRight={2} bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{bgGradient : 'linear(to-l, #FF0080, #7928CA)'}}>Instagram</Button>
            <Button variant="outline" colorScheme="red">Youtube</Button>
            </Box>
            <br></br>
            <Text as="cite" color="gray">" Tolong Kasih Quotes "</Text>
        </div>
        </>
    )
}