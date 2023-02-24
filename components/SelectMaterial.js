import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectWord() {
    const [word, setWord] = useState('');


    const handleChange = (event) => {
        setWord(event.target.value);
    };

    return (
        <FormControl sx={{ mt: 1, minWidth: 180 }} size="small">
            <InputLabel shrink={false} id="demo-select-small"> {word === '' && 'Choose answer'}</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                onChange={handleChange}
                value={word}
                inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value={10}>Value 1</MenuItem>
                <MenuItem value={20}>Value 2</MenuItem>
                <MenuItem value={30}>Value 3</MenuItem>
                <MenuItem value={40}>Value 4</MenuItem>
                <MenuItem value={50}>Value 5</MenuItem>
            </Select>
        </FormControl>
    );
}
