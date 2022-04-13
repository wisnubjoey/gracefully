import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Lorem,
    Image,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Flex,
    Box,
    Badge,

  } from '@chakra-ui/react'

  import Link from 'next/link'

  import styles from '../styles/testing.module.css'



export default function Card() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Box borderColor="gray.100" boxShadow='dark-lg' borderWidth='3px' borderRadius='2xl' maxWidth={5000} overflow='hidden'>
    
        <Flex className={styles.image}>
      <Image rounded="md" onClick={onOpen} src='Silvio.jpg' maxH={300}  _hover={{bg: "gray.500", cursor: "pointer"}}/>
      </Flex>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="md" motionPreset="scale">
          
          <ModalOverlay bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px' />
        <ModalContent>
        <Image boxShadow="dark-lg" rounded="md" src='Silvio-2.jpg' maxW='xl' maxH='2xl' alt='Dan Abramov' />
            <ModalHeader>
                <ModalCloseButton />
            </ModalHeader>

            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>I Gede Silvio Ananta Pinandito BMM</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Umur</Th>
                            <Th>Nomor Absen</Th>
                            <Th>Lokasi Rumah</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Th>()</Th>
                            <Th>4</Th>
                            <Th>Bumi | <Button variant="link"><Link href="https://www.google.com/maps/@-8.6472221,115.1730629,3a,75y,53.55h,82.54t/data=!3m7!1e1!3m5!1sFgpMSzSj8aLsmT6lqCN03g!2e0!5s20190901T000000!7i13312!8i6656?hl=id">Google Maps</Link></Button></Th>
                        </Tr>
                    </Tbody>

                </Table>
            </TableContainer>
            
            <ModalFooter>
          </ModalFooter>
          <Button as="samp" size="lg" _hover={{bg: "white", color: "blue.500"}} colorScheme='blue' mr={3} onClick={onClose} w="100%">
              Close
            </Button>
        </ModalContent>
      </Modal>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='green'>
            4
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            Silvio
          </Box>
        </Box>
        <br></br>
        <Button onClick={onOpen} as="samp">Detail</Button>
        </Box>
      </Box>
    </>
  )
}
