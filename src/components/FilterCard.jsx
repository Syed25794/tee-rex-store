import { Box, Checkbox, Heading } from '@chakra-ui/react'
import React from 'react'

const FilterCard = ({data}) => {
  return (
    <Box w="250px" alignItems="start" p="20px" marginTop="20px" boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px">
        {data.map(object=>(
            <Box key={object.id}>
            <Heading size="md">{object.heading}</Heading>
            <Box display="flex" flexDirection={"column"}>
                {object.properties.map(property=>(
                    <Checkbox key={property[0]} value={property[1]}>{property[2]}</Checkbox>
                ))}
            </Box>
            </Box>
        ))}
    </Box>
  )
}

export default FilterCard