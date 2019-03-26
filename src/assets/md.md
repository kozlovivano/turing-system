# Successful projects are above all about a quality process
<div>{{url}}, {{locale}}</div>


We present here our production process and quality control of software developments currently implemented by Arsac Consulting, our software development and engineering center.

This presentation is intended for your non-technical staff, and will also allow you to identify the elements essential to the success of your projects.

In order to remain easy to understand, please consider the presence of some simplifications.

<div class="alert alert-info">You will find advice on important points during your IT service prospecting.</div>

## Development Process, Quality Control and Production Implementation

In short, for the development of an application we identify 7 parts:
* Accompanying, identification of the need, and choice of the technical solution
* The development of the application by one or more teams of developers
* Quality controls and error detection
* Deployment in a development environment
* Deployment in production
* The handing over of sources
* The maintenance

These parts are performed simultaneously for obvious reasons of time saving, facilitating the identification and correction of errors, etc.


### Accompanying and identification of the need, or (A)MOA

This step is necessary for any project, it is carried out by one or more people depending on the complexity and size of the project.

The mission of the Project Management (or MOA) is to understand your needs and propose an appropriate technical solution.

It is also this same group of people who will drive the project forward and ensure that the production of the solution does not deviate from what you need.

<!-- TODO GIF -> analyse ? -->

### The development

The identified project will then be assigned to one or more teams.

This is an obvious observation, which however requires an infrastructure that allows each developer to work simultaneously, without hindering each other and maintaining control of the production.

This infrastructure is called a **Software Forge**, which the rest of this document will present to you.

<!-- TODO GIF -> petit bohomme ordinateur -> production fichier -->

<div class="alert alert-info">Unfortunately, the presence of this infrastructure is not an automatic feature, especially among (groups of) independent developers and small structures, and we therefore advise you to observe your employees' production processes.</div>


### Quality controls and error detection

The developers therefore produce their parts of the application and throughout the development, will intervene this critical part that is the mastery of the work rendered.

Indeed, if pooling is nowadays easily implemented in all structures by standard software (Git to name it), the control and standardization of work are all equally important.

Otherwise, the development mechanically undergoes a heavy slowdown and will necessarily contain errors when it is put into production. This is a point that should not be overlooked.

#### Of course, these controls are automatic

In our case, we use automatic filters to refuse to share a developer's work if it generates bugs or if it does not comply with the source standardization charter.

For error detection, we use unit tests (or UT). These are programs that automatically test only the behavior of the functionalities and that of certain internal parts of the application to ensure that they maintain a correct and constant behavior.

*For the detail: Since parts of an application are systematically used by several features (without this being obvious to the developer), it is common for a developer to change the behavior of a feature unintentionally. Which is therefore, as you will understand, an important source of bugs.*

<div class="alert alert-info">The use of unit tests is time-consuming but necessary to ensure that there is no bug in the final application. As well, some companies do not use this type of technology, so we recommend that you confirm their presence.</div>

<!-- TODO : GIF d'un policier qui tape sur un fichier -->


### Deployment in a development environment

Thanks to our expertise in our cloud environment, sharing software and **[Jenkins](https://jenkins.io)**, to name just a few, we can automatically trigger the update of the application development version on our internal cloud platform, our development environment.

Keyword: This technique is linked to continuous integration technologies and DevOps.

<div class="alert alert-info">This is an important point, especially on projects where teams need to use the work of other teams. For example, when the development of several applications is necessary for the same project.
When we also provide the production platform we ensure that the development platform is identical to the production platform. If not, we get as close as possible to it.</div>

Keyword: We are therefore talking about an iso-production development platform.

<div class="alert alert-info">This ensures that the product will run smoothly on the destination platform. As this structure requires mastery of the cloud platform to be implemented smoothly, it is not present in the majority of small specialized structures.</div>

<!-- TODO image server toussa toussa -->


### Deployment in production

Having an iso-production environment for developments, you will understand that production and updates can be done (depending on the nature of the project, for example for web projects) in a transparent way, and without interruption of service, depending on the nature of the project.

For web projects, when deployed on our infrastructures, they are equipped with a load balancer, which contributes to the transparency of updates and the non-stop service of load balancing and updates.

In addition, our infrastructures are, from what we could poorly translate from, "self-healing". This means that when an application stops, it is automatically restarted, which avoids a shutdown/depletion of the service.


### The handing over of sources

The work rendered by a developer is called "source".

We systematically provide them, as well as for intellectual property rights (excluding open-source projects), which allows you to maintain the project by your own means or by a third party.

<div class="alert alert-info">According to the law in force in your country, as in France, companies are not necessarily required to deliver the sources or transfer intellectual property rights if this is not made explicit in the contract. We therefore advise you to make sure that these few lines are present.</div>


### The support

Support is necessary from the moment of production start-up.

In most of our offers, we ensure product support throughout the development process followed by one year after the production launch.

This guarantees you a bug-free product.

<a class="btn btn-primary text-center" href="/contact">Contact an <abbr title="your MOA">advisor</abbr></a>