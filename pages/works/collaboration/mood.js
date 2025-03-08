import {
    Heading,
      Container,
      Badge,
      Link,
      List,
      ListItem,
      UnorderedList,
      Center,
      Image,
      SimpleGrid,
      Modal,
      ModalOverlay,
      ModalContent,
      ModalBody,
      useDisclosure,
      Box
    } from '@chakra-ui/react'
    import Layout from '../../../components/layouts/article'
    import { ExternalLinkIcon } from '@chakra-ui/icons'
    import { Title, Meta,  } from '../../../components/work'
    import P from '../../../components/paragraph'
    import thumbleMood from '../../../images/mood.png'
    import tumbleMoodScreen2 from '../../../images/mood/Capture1.png'
    import tumbleMoodScreen3 from "../../../images/mood/Capture d’écran 2.png"
    import tumbleMoodScreen4 from "../../../images/mood/Capture d’écran3.png"
    import { useState } from 'react'

    const ImageModal = ({ isOpen, onClose, src, alt }) => (
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="transparent" maxW="90vw">
          <ModalBody p={0}>
            <Image src={src} alt={alt} w="100%" h="auto" maxH="90vh" objectFit="contain" />
          </ModalBody>
        </ModalContent>
      </Modal>
    )

    const Work = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [selectedImage, setSelectedImage] = useState(null)

      const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc)
        onOpen()
      }

      return (
        <Layout title="mood">
          <Container>
            <Title>
              Mood <Badge>2024 - 2025 </Badge>
            </Title>
            <Center my={6}>
              <Image src={thumbleMood.src} alt="test" maxW="500px" w="100%" />
            </Center>
            
            
            <Heading as="h3" fontSize={20} mb={4} mt={8}>
              Description
            </Heading>
    
            <P>
            Une application de rencontre unique qui met l&apos;émotion au cœur des connexions. En analysant l&apos;humeur de l&apos;utilisateur, elle propose des correspondances basées sur la compatibilité émotionnelle, permettant ainsi de créer des relations plus authentiques et harmonieuses. Grâce à une approche intuitive et personnalisée, elle aide chaque utilisateur à trouver un partenaire qui partage son état d&apos;esprit et ses aspirations du moment.
            </P>
    
    
            <Heading as="h3" fontSize={20} mb={4} mt={8}>
              Participations
            </Heading>
            <UnorderedList ml={4} my={4}>
              <ListItem>Contribution au développement Front-end de l&apos;application Mobile GoChap mobile basé sur React Native . </ListItem>
              <ListItem>Contribution au backend basé sur Firebase</ListItem>
              <ListItem>développement du système de compte premium, direct dm et Matching</ListItem>
            
            
            </UnorderedList>
    
            <Heading as="h3" fontSize={20} mb={4} mt={8}>
            Références
          </Heading>
    
            <List ml={4} my={4}>
              <ListItem>
                <Meta>Plateforme</Meta>
                <span>Web, Android, iOS</span>
              </ListItem>
              <ListItem>
                <Meta>Stack</Meta>
                <span>Flutter, Firebase</span>
              </ListItem>
          
          
              
              <ListItem>
                <Meta>Site officiel</Meta>
                <Link href="https://akkkka.web.app">Mood<ExternalLinkIcon mx="2px" /></Link>
              </ListItem>
            </List>
            <SimpleGrid columns={[1, 1, 2]} gap={1} mt={1}>
              <Box 
                cursor="pointer" 
                onClick={() => handleImageClick(tumbleMoodScreen2.src)}
                maxW="250px"
                mx="auto"
              >
                <Image src={tumbleMoodScreen2.src} alt="Mood" w="50%" h="auto" />
              </Box>
              <Box 
                cursor="pointer" 
                onClick={() => handleImageClick(tumbleMoodScreen3.src)}
                maxW="250px"
                mx="auto"
              >
                <Image src={tumbleMoodScreen3.src} alt="Mood" w="50%" h="auto" />
              </Box>
              <Box 
                cursor="pointer" 
                onClick={() => handleImageClick(tumbleMoodScreen4.src)}
                maxW="250px"
                mx="auto"
              >
                <Image src={tumbleMoodScreen4.src} alt="Mood" w="50%" h="auto" />
              </Box>
            </SimpleGrid>
    
            <ImageModal 
              isOpen={isOpen} 
              onClose={onClose} 
              src={selectedImage} 
              alt="Mood detail"
            />
    

     </Container>
      </Layout>
      )}
    export default Work;
      export { getServerSideProps } from '../../../components/chakra';