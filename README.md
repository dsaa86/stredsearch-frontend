# stredsearch-frontend
The front end for the StredSearch web app

# Project Overview:

The StredSearch-Frontend provides an independent UI for the Django Rest Framework project ['StredSearch'](https://github.com/dsaa86/stredsearch).
I am by no means a UI/UX designer, which is reflected in the design of this UI. I am however, more than capable at implementing a creative's design.

# Technology Stack:

* **Framework**
  * Built on React
  * State management via 'standard' props, redux integration in V2
* **Additional Tooling**
  * Async calls handles via Axios
  * Frontend using Bootstrap 5 components.

# Features:

* Provides asynchronous searching of both the Stack Overflow and Reddit coding communities to allow developers to find solutions and fixes from two of the more popular online networks within a single site.
* Requests are issued to the StredSearch service, which handles further API calls to the external services.
* State is managed through custom hooks and traditional props, rather than managing state at a global level using Redux.
  * Implementation of Redux as a comparative example is planned for V2 of this platform.  

# Component Structure:

* The components can be broadly separated in to three main areas:
  * **Local Search**
  * Users are able to search for data points that have been cached locally on the StredSearch platform. Each question retrieved from both Reddit and SO are cached to allow for more low-overhead search.
  * **Dynamic Search**
  * Users are able to search both Reddit and SO directly, with complex query functionality in particular for SO.
  * **Search Responses**
  * Both Local and Dynamic search results are rendered in a search response area, with responses from respective platforms delineated by column and styling.

  * Typical component reuse strategies are employed where practicable without creating a maze-like hierarchy that prevents code maintainability.

# Custom Hooks and State Management:

  * Custom hooks are used in abundance throughout the codebase.
  * All custom hooks involve at least one standard hook being called.
  * These custom hooks are also used to clean up the code of the component, and to extract functionality of a component away from structural code.

# API Integration:

  * All HTTP calls are made directly to the StredSearch backend.
  * These are asynchronous, which is managed by the Axios library.
  * Data returned by the server is, for the most part, processed and sanitised in accordance with the UI needs on the server side; this is possible due to the parallel development of these two projects.
    * This reduced client-side processing overhead to sanitise and prepare data.

# Testing:

  * Unit tests are deployed to each component, testing the functionality and data throughput of a component.
  * Integration tests are yet to be implemented.
  * A full test suite powered by Selenium is also yet to be implemented.

# Build and Deployment:

  ## Key Considerations

  * CI/CD pipeline integration and tooling. AWS and GCP offer in-house solutions to ease integration. Third party tooling integration is also possible with appropriate configuration.
  * Logging & Monitoring. Again, both platforms provide custom logging platforms to provide service metrics.
  * CDN and caching. Both platforms offer in-house networks to reduce server load and improve load times for geographically distributed users.

  ## Deployment Solutions
  
  * **AWS**
    * *Small user-base*
      * Amplify with S3 and Cloudfront.
      * Abstracting the hosting and build of a React app with Amplify frees time to focus on product development.
    * *Large user-base*
      * Elastic Beanstalk, utilising the enhanced scalability of this platform.
      * EC2 with Auto Scaling and ELB would be an even more robust and customisable solution for large-scale deployment of the front-end.
  * **GCP**
    * *Small user-base*
      * Google App Engine for seamless integration with CI/CD pipeline. Automatic scaling for traffic spikes and variation.
    * *Large user-base*
      * Google Kubernetes Engine for high scalability, availability, and regional / zonal control.
      * Allows for version control and rollback in the event of a pervasive interface or system issue.
