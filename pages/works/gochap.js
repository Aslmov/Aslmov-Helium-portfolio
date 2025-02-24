import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="gochap">
      <Container>
        <Title>
          GoChap <Badge>2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="../../images/gochap.png" alt="icon" />
        </Center>
        <P>
          Outil de partage de fichiers P2P avec intégration pour Windows
        </P>
        <P>
          Solution de covoiturage et de déplacements partagés
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Transfert de fichiers rapide sans limite de taille</ListItem>
          <ListItem>Communication simultanée entre plusieurs ordinateurs</ListItem>
          <ListItem>
            Fonction de connexion automatique pour simplifier la configuration
          </ListItem>
          <ListItem>
            Protocole puissant permettant diverses communications avec une seule ouverture de port
          </ListItem>
          <ListItem>
            Fonction de messagerie instantanée avec possibilité de partager des photos pendant les conversations
          </ListItem>
          <ListItem>
            Fonction de partage de fichiers permettant de montrer les dossiers publics configurés
          </ListItem>
          <ListItem>Connexion possible via invitation depuis MSN/Windows Messenger</ListItem>
          <ListItem>
            Fonction de partage d&apos;écran pour montrer votre bureau à d&apos;autres utilisateurs
          </ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Plateforme</Meta>
            <span>Windows 2000/XP</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta>
            <span>Delphi</span>
          </ListItem>
          <ListItem>
            <Meta>Téléchargement</Meta>
            <Link href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
              v0.5.15.123
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Dernière mise à jour</Meta>
            <span>2008/03/23</span>
          </ListItem>
          <ListItem>
            <Meta>Manuel</Meta>
            <Link href="https://w.atwiki.jp/amembo/">Guide d&apos;utilisation</Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Couverture médiatique</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://forest.watch.impress.co.jp/article/2006/01/18/amembo.html">
              <Badge mr={2}>Mado no Mori</Badge>
              Outil de partage de fichiers P2P avec intégration MSN Messenger{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/amembo_01.gif" alt="amembo" />
          <WorkImage src="/images/works/amembo_02.gif" alt="amembo" />
        </SimpleGrid>
        <WorkImage src="/images/works/amembo_03.jpg" alt="amembo" />
        <WorkImage src="/images/works/amembo_04.jpg" alt="amembo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'