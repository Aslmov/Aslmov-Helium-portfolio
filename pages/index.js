import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Salut, Je suis morguen et bienvenue sur mon portfolio
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
              Koumana Diwediga Morguen       
          </Heading>
          <p>Developpeur Full-stack et Data Scientist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profil.jpeg" 
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Moi
        </Heading>
        <Paragraph>
        
        Koumana Morguen est un développeur full-stack et étudiant à Paris. il
        est passionné d&apos;informatique, robotique et jeux vidéo. Très dynamique et
        concentré dans chaque projet entreprit que ce soit universitaire ou professionnel. 
        Il est actuellement en master en Data Science et Stratégie à IONIS STM Paris.
        Je ne vous en dit pas plus et vous laisse le voir à travers son portfolio.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mes projets
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2018</BioYear>
          Obtention du bac 
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Self Taught programmer journey et travail en freelance
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Obtention de sa licence en Informatique de Gestion à Ucao St Michel Dakar
        </BioSection>
        <BioSection>
          <BioYear>2024 - 2025</BioYear>
         Master en Data Science et Stratégie à IONIS STM Paris
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          J&apos;❤️
        </Heading> 
        <Paragraph>
        Robotique 🦾, Machine Learning 🤖, Art 🎭 , Musique 🎷, Jeux Videos 🕹️, Basket 🏀
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Aslmov" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Aslmov
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/molouganx/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @molouganx
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
