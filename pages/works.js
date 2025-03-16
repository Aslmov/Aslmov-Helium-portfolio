import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbleGochap from '../images/gochap.png'
import tumbleMood from '../images/mood.png'
import tumbleHunt4job from '../images/hunt4job.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Collaborations
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="collaboration/gochap" 
            title="GoChap" 
            thumbnail={thumbleGochap}
          >
            Plateforme digitale de services de mobilité et de livraison
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="collaboration/mood"
            title="mood"
            thumbnail={tumbleMood}
          >
            Application de rencontre basé sur le mood des utilisateurs
          </WorkGridItem>
        </Section>

       
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projets personnels
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="universitaire/hunt4job" thumbnail={tumbleHunt4job} title="hunt4job">
          Application de recherche d&apos;emploi utilisant du web scrapping et l&apos;ia
          </WorkGridItem>
        </Section>
       
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projets Universitaires
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
        <WorkGridItem id="universitaire/hunt4job" thumbnail={tumbleHunt4job} title="hunt4job">
          Application de recherche d&apos;emploi utilisant du web scrapping et l&apos;ia
          </WorkGridItem>
        </Section>
        
        <Section delay={0.6}>
          <WorkGridItem id="universitaire/biblioteka" thumbnail={tumbleHunt4job} title="Biblioteka">
          Projet d’initiation au traitement batch avec Hadoop HDFS et MapReduce, utilisant Docker pour le déploiement d’un cluster Hadoop à trois nœuds.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'