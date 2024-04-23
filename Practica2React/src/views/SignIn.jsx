import { Box, Button, Card, HStack, Heading, Image, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate()
  return (
    <>
        <Box 
            backgroundImage={"https://www.mactualidad.com/wp-content/uploads/2013/06/fondo-pantalla-mac-13.jpg"} 
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            w={"100%"}
            h={"600%"}
        >
            <HStack p={"30px"} bgGradient="linear(to-l, #7928CA, #FF0080)" borderRadius={"30px"} boxShadow={"2xl"}>
                <Image 
                borderRadius={"30px"}
                boxSize='150px'
                src="https://th.bing.com/th/id/OIP.SJuEDA8ShJhyFNK_aSqIZwHaHZ?rs=1&pid=ImgDetMain"
                ></Image>
                <Card bg={"#ffffff"} p={10} borderRadius={"30px"} boxShadow={"2xl"} flexGrow={"1"} minWidth={"400px"}>
                    <Heading 
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            bgClip='text'
                            fontSize='4xl'
                            fontWeight='extrabold'> Iniciar Sesion
                    </Heading>
                    <VStack spacing={4} mb={6}>
                        <Input placeholder="Usuario" variant='flushed'></Input>
                        <Input placeholder="Contraseña" variant='flushed'></Input>
                    </VStack>
                    <Button bg="#450068" color={"#ffffff"} borderRadius={"30px"} onClick={()=> navigate("/")}>
                            Iniciar Sesion
                        </Button>
                </Card>
            </HStack>
        </Box>
    </>
  )
}

export default SignIn