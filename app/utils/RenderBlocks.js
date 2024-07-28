import { blocks } from "../blocks/blockList";

const RenderBlocks = ({ layout }) => (
    <>
        {layout.map((block, index) => {
            const Block = blocks[block.blockType]

            if (Block) {                
                return <Block key={index} {...block} />
            }
            return null
            })
        }

    </>

)

export default RenderBlocks