---
title: Home
id: home
template: home
blueprint: page
cards:
  -
    id: welcome_card
    type: card
    enabled: true
    card_title: 'Welcome to Statamic'
    card_subtitle: 'Getting Started'
    card_content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Welcome to your brand new Statamic site! Here are a few ideas to get you started, but feel free to explore in your own way, in your own time.'
      -
        type: set
        attrs:
          id: getting_started_list
          values:
            type: icon_list
            items:
              -
                id: control_panel
                type: item
                title: 'Jump into the Control Panel'
                description: 'Edit this page or begin setting up your own collections and blueprints.'
                enabled: true
              -
                id: documentation
                type: item
                title: 'Head to the docs'
                description: 'Learn how Statamic works and explore all its features.'
                enabled: true
              -
                id: videos
                type: item
                title: 'Watch Statamic videos'
                description: 'Check out helpful tutorials and guides on YouTube.'
                enabled: true
              -
                id: community
                type: item
                title: 'Join our Discord'
                description: 'Meet thousands of other Statamic developers and get help.'
                enabled: true
---
