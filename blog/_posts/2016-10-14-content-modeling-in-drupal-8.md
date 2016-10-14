---
layout: blog
body-class: blog-post
topic: technology
title: Content Modeling in Drupal 8
homepage: false
author: greg  
published: false
featured: false
short: 
tags:
  - Drupal 8
  - Drupal
  - Drupal Planet
  - Content modeling
date: 2016-10-14 11:00:00
image: https://thinkshout.com/assets/images/ts_icon.jpg
---

In many modern frameworks, data modeling is done by building out database tables. In Drupal, we use a web-based interface to build our models. This interface makes building the database accessible for people with no database experience. However, this easy access can lead to overly complex content models because it’s so easy to build out advanced structures with a few hours of clicking. It’s surprising how often Drupal developers are expected to be content modeling experts. Rachel Lovinger wrote this great overview of content modeling for the rest of us who aren’t experts yet.

DATA MODELING GOAL

Our goal when modeling content in Drupal is to build out the structure that will become our editor interface and HTML output. We also need to create a model that supports the functionality needed in the website. While accomplishing this, we want to reduce the complexity of our models as much as possible.

GETTING STARTED

One of the first things to do when building a Drupal site is build content types. So, before you start a site build, start with either a content model or a detail page wireframe. This spreadsheet from Palantir will help you. The home page design may look amazing, but it’s unhelpful for building out content types. Get the detail pages before you start building.

WHY REDUCE COMPLEXITY?

The more content types you create, the more effort it will take to produce a site. Furthermore, the more types you have, the more time it will take to maintain the site in the future. If you have 15 content types and need to make a site-wide change, you need to edit 15 different pages.

The more pages you need to edit, the more mistakes you will make in choosing labels, settings, and formatters. Lastly, content can’t easily be copied from one type to another, which makes moving content around your site harder when there are many content types. So, the first thing you’ll want to do with your content model is collapse your types into as few types as feasible. How many is that?

5 CONTENT TYPES IS ENOUGH

Drupal has many built in entities like files, taxonomy, users, nodes, comments, and config. So, the vast majority of sites don’t need any more than 5 content types. Instead of adding a new content type for every design, look for ways to reuse existing types by adding fields and applying layouts to those fields.

BREAK UP THE EDIT FORM

Drupal 8 allows you to have different form displays for a single content type. With either Form Mode Control or Form Mode Manager, you can create different edit experiences for the same content type without overloading the admin interface.
By reducing the complexity of the content model, we decrease maintenance cost, improve the consistency of the website, and simplify the editing experience. Now that you’ve got some content modeling basics, look for opportunities to reduce and reuse content types in your Drupal projects. Content editors will thank you.