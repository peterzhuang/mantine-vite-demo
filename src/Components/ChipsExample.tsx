import { Chip } from "@mantine/core";
import { useState } from "react";


function ChipsExample() {

    const [value, setValue] = useState(['react']);

    return (
        <div>
            <Chip.Group value={value} onChange={setValue} multiple >
            <Chip value="react" color="pink" variant="filled" size="xl">React</Chip>
            <Chip value="ng" color="pink" variant="filled" size="xl">Angular</Chip>
            <Chip value="svelte" color="pink" variant="filled" size="xl">Svelte</Chip>
            <Chip value="vue" color="pink" variant="filled" size="xl">Vue</Chip>
            </Chip.Group>
        </div>
    );
}

export default ChipsExample;