import { Input, TextInput } from "@mantine/core";
import { IconBrandGithub, IconBrandNotion } from "@tabler/icons";
import { useState } from "react";


function InputExample() {



    return (
        <div>
            <TextInput 
                icon={<IconBrandGithub />}
                rightSection={<IconBrandNotion />}
                label="This is the best input field"
                description="No this is the best description"
                error="YOU'VE BLOODY ERRORED"
                required
            />
            <Input
                component="select"
            >
                <option value="1">1</option>
                <option value="2">2</option>
            </Input>
        </div>
    );
}

export default InputExample;