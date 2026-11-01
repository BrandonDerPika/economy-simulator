# Pop Economy Simulator

[**Play the Simulation**](https://brandonderpika.github.io/economy-simulator/)

A small agent-based simulation exploring how a population interacts with an employment system.

Spawn individual Pops into an area, create jobs with specific skill requirements, and watch as they search for work, develop their abilities, and move between employment and unemployment.

## Features

### Population Simulation

- **Spawn Pops:** Add individual Pops to an area and watch them operate independently.
- **Randomized Skills:** Each Pop starts with randomly assigned farming, mining, and strength skills.
- **Individual Activity:** Each Pop follows its own simulation cycle and records recent activity.
- **Population Tracking:** View the total population, employed Pops, and unemployed Pops in each area.

### Employment System

- **Create Jobs:** Add jobs with a custom name, required skill, and number of available positions.
- **Automatic Job Matching:** Unemployed Pops search for available positions and choose jobs based on their skill levels.
- **Skill Development:** Pops have a chance to improve their relevant skills while working.
- **Job Turnover:** Pops periodically reconsider their employment and may leave their current position.
- **Job Management:** Remove jobs and manage available positions within an area.

### Areas

The simulation organizes Pops and jobs into areas. Each area maintains its own population, employment statistics, and available job positions.

## How It Works

Each Pop operates through a repeating cycle:

1. **Unemployed:** The Pop waits before searching for an available job.
2. **Job Search:** The Pop evaluates open positions and selects one based on its skills.
3. **Working:** The Pop works for a period of time and has a chance to improve its relevant skill.
4. **Reevaluation:** The Pop decides whether to remain employed or leave its position.

When a Pop leaves a job, its position becomes available for another Pop to fill.

Because each Pop runs its own cycle, employment changes emerge from the interactions of individual agents rather than being assigned all at once by a central simulation process.

## Project Motivation

I wanted to experiment with a simulation in which individual agents make decisions independently and collectively produce larger population-level behavior.

Rather than directly controlling employment statistics, the simulation gives each Pop its own skills, employment status, and decision-making cycle. The resulting behavior comes from how those individual agents interact with the available jobs.

This is an early experiment in agent-based simulation, with room to expand into more complex economic systems.
