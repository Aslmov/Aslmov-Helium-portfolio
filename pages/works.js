import { Container, Heading, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Works = () => (
  <Layout title="Projets">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projets
      </Heading>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Rien pour le moment désolé
      </Box>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
