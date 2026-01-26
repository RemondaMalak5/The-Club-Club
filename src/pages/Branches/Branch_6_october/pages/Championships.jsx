import React from 'react'
import ChampionshipsLatest from '../component/Championships/ChampionshipsLatest'
import ChampionshipsContent from '../component/Championships/ChampionshipsContent'

const Championships = () => {
  return (
    <section>
        <ChampionshipsContent/>
        <ChampionshipsLatest />
    </section>
  )
}

export default Championships