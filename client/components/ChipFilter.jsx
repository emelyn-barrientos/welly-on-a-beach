import React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

function ChipFilter({ features, selected, updateSelected }) {
  const handleClick = (e, feature) => {
    if (selected.includes(feature)) {
      updateSelected((selected) =>
        selected.filter((element) => element != feature)
      )
    } else {
      updateSelected((selected) => [...selected, feature])
    }
  }

  return (
    <>
      <Stack direction="row" spacing={1}>
        {features &&
          features.map((feature) => {
            return (
              <>
                <Chip
                  key={feature}
                  label={feature}
                  clickable={true}
                  onClick={(e) => handleClick(e, feature)}
                  variant={selected.includes(feature) ? 'filled' : 'outlined'}
                />
              </>
            )
          })}
      </Stack>
    </>
  )
}

export default ChipFilter
