import { Component, OnDestroy, OnInit } from '@angular/core';

type MenuKey = 'services' | 'domains' | 'software';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ksbaig_co';
  activeMenu: MenuKey | null = null;
  mobileOpen = false;
  activeSlide = 0;
  private slideTimer?: ReturnType<typeof setInterval>;

  readonly menuGroups: Record<MenuKey, { title: string; icon: string; items: string[] }[]> = {
    services: [
      { title: 'Core services', icon: '⌖', items: ['GIS', 'Remote Sensing', 'Software Development', 'API'] },
      { title: 'Field & analysis', icon: '◉', items: ['Environmental Study', '3D Compilations', 'CAD', 'Spatial Analysis'] }
    ],
    domains: [
      { title: 'GIS & Geospatial Intelligence', icon: '⌖', items: ['Enterprise Web GIS', 'Spatial Data Management', 'Geospatial Analysis'] },
      { title: 'Smart Cities & Urban Planning', icon: '▦', items: ['Urban Development Planning', 'Land Information Systems', 'Cadastral & Parcel Management'] },
      { title: 'Banking & Financial Intelligence', icon: '⌂', items: ['ATM & Branch Location Analytics', 'Site Selection & Market Analysis', 'Spatial Optimization'] },
      { title: 'Utilities & Infrastructure', icon: 'ϟ', items: ['Water, Electricity & Telecom Networks', 'Utility Asset Mapping', 'Infrastructure Planning'] },
      { title: 'Remote Sensing & Earth Observation', icon: '◉', items: ['Satellite Imagery Analysis', 'Change Detection', 'Land Cover & Environmental Mapping'] },
      { title: 'AI Agents & Intelligent Automation', icon: '⌘', items: ['GIS Voice Agents', 'AI-Powered Spatial Querying', 'Workflow Automation'] },
      { title: 'Real Estate & Land Information Systems', icon: '⌂', items: ['Property & Plot Mapping', 'Real Estate Location Intelligence', 'Land Records & Development Analysis'] },
      { title: 'Digital Twins & Spatial Analytics', icon: '◎', items: ['2D/3D GIS', 'Digital Twin Solutions', 'Location-Based Decision Support'] }
    ],
    software: [
      { title: 'Esri GIS Platform', icon: '◎', items: ['ArcGIS Enterprise', 'ArcGIS Pro', 'ArcGIS Online', 'ArcGIS Server & Portal'] },
      { title: 'Open-Source GIS', icon: '⌘', items: ['QGIS', 'PostGIS', 'GeoServer', 'OpenLayers'] },
      { title: 'Remote Sensing & 3D Mapping', icon: '◈', items: ['ERDAS IMAGINE', 'Skyline Software Systems', 'Satellite Imagery Processing', '3D Mapping & Photogrammetry'] },
      { title: 'Databases, Enterprise & Cloud', icon: '▤', items: ['Oracle Database & Oracle Spatial', 'Microsoft SQL Server', 'Microsoft Azure', '.NET / ASP.NET Core'] },
      { title: 'Web Development & APIs', icon: '</>', items: ['Angular', 'React', 'TypeScript / JavaScript', 'Python'] },
      { title: 'Project Management & Collaboration', icon: '▣', items: ['Jira', 'Confluence', 'Microsoft Project', 'Agile / Scrum Tools'] }
    ]
  };

  readonly slides = [
    {
      image: 'assets/slides/ksb-hero-sketch.jpg',
      alt: 'Hand-drawn geospatial illustrations around a GIS solutions screen',
      eyebrow: 'A clearer perspective. A smarter tomorrow.',
      title: 'KSB Solutions.',
      subtitle: 'Your world,',
      highlight: 'better understood.',
      description: 'We bring location to life through GIS, remote sensing, and intelligent software, helping you turn complex data into confident decisions.',
      label: 'GIS solutions, seen differently'
    },
    {
      image: 'assets/slides/Eco-GIS Smart City Visualization Office-1.png',
      alt: 'GIS command center displaying environmental and smart city maps',
      eyebrow: 'Better decisions start with better data.',
      title: 'Understand the', subtitle: 'systems shaping', highlight: 'our environment.',
      description: 'Connect environmental intelligence with city planning to make growth more resilient and sustainable.',
      label: 'Eco-GIS and smart cities'
    },
    {
      image: 'assets/slides/Modern GIS Workspace with Satellite Mapping-1.png',
      alt: 'Modern geospatial workstation with satellite mapping and spatial analytics',
      eyebrow: 'A clearer view from every layer.',
      title: 'Bring the world', subtitle: 'into focus with', highlight: 'spatial data.',
      description: 'Combine satellite imagery, GIS, and analytics to reveal the patterns behind complex places.',
      label: 'Satellite mapping and analysis'
    },
    {
      image: 'assets/slides/Geospatial Mapping Workspace Panorama-2.png',
      alt: 'Panoramic geospatial workspace overlooking a city with maps and survey equipment',
      eyebrow: 'From field work to a bigger picture.',
      title: 'Map what matters.', subtitle: 'Plan what comes', highlight: 'next.',
      description: 'Bring field observations, detailed maps, and location intelligence together in one clear view.',
      label: 'Geospatial mapping workspace'
    },
    {
      image: 'assets/slides/Satellite-Powered Urban GIS Workspace-2.png',
      alt: 'Urban GIS workstation combining satellite imagery with city analytics',
      eyebrow: 'See change as it happens.',
      title: 'Turn imagery', subtitle: 'into actionable', highlight: 'insight.',
      description: 'Monitor urban growth and landscape change with satellite-powered geospatial analysis.',
      label: 'Satellite-powered urban GIS'
    },
    {
      image: 'assets/slides/Geospatial Workspace with City Views-3.png',
      alt: 'Geospatial analysis screens overlooking a modern city',
      eyebrow: 'Every place has a story in its data.',
      title: 'Explore cities', subtitle: 'through a spatial', highlight: 'lens.',
      description: 'Make infrastructure, neighborhoods, and land use easier to understand with connected GIS tools.',
      label: 'City-scale spatial intelligence'
    },
    {
      image: 'assets/slides/Futuristic GIS Smart City Workspace-4.png',
      alt: 'Smart city GIS analytics workstation with mapping dashboards',
      eyebrow: 'Technology grounded in place.',
      title: 'Build smarter', subtitle: 'cities with', highlight: 'location insight.',
      description: 'Support better planning with a joined-up view of people, assets, networks, and places.',
      label: 'Smart city GIS'
    },
    {
      image: 'assets/slides/Modern GIS Command Center-5.png',
      alt: 'GIS command center showing layered maps and live spatial analytics',
      eyebrow: 'Complex information. Clear direction.',
      title: 'See the whole', subtitle: 'picture, then', highlight: 'act with clarity.',
      description: 'Bring spatial data and analytical tools together to make confident, evidence-led decisions.',
      label: 'GIS command center'
    },
    {
      image: 'assets/slides/Geospatial Innovation in a Green Cityscape-6.png',
      alt: 'Green city landscape visualized through geospatial mapping technology',
      eyebrow: 'A smarter tomorrow is built today.',
      title: 'Make space', subtitle: 'for sustainable', highlight: 'possibilities.',
      description: 'Use geospatial insight to balance urban development, natural resources, and community needs.',
      label: 'Geospatial innovation'
    },
    {
      image: 'assets/slides/Modern GIS Workspace Overlooking the City-7.png',
      alt: 'GIS analyst workspace overlooking a city with digital mapping screens',
      eyebrow: 'Grounded in expertise. Driven by possibility.',
      title: 'From location', subtitle: 'data to real-world', highlight: 'understanding.',
      description: 'KSB Solutions connects geospatial expertise with practical tools for the challenges around you.',
      label: 'A new perspective on our planet'
    },
    {
      image: 'assets/slides/Modern GIS Workspace Overlooking the City-8.png',
      alt: 'City-facing GIS workspace with satellite maps, analytics, and survey instruments',
      eyebrow: 'Precision in every layer.',
      title: 'Your world,', subtitle: 'mapped with', highlight: 'purpose.',
      description: 'Explore a more useful view of your data with mapping, remote sensing, and custom GIS solutions.',
      label: 'Mapping possibilities'
    }
  ];

  toggleMenu(menu: MenuKey): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  closeMenus(): void {
    this.activeMenu = null;
    this.mobileOpen = false;
  }

  ngOnInit(): void {
    this.slideTimer = setInterval(() => this.showNextSlide(), 7000);
  }

  ngOnDestroy(): void {
    if (this.slideTimer) clearInterval(this.slideTimer);
  }

  showSlide(index: number): void {
    this.activeSlide = (index + this.slides.length) % this.slides.length;
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
      this.slideTimer = setInterval(() => this.showNextSlide(), 7000);
    }
  }

  showNextSlide(): void {
    this.showSlide(this.activeSlide + 1);
  }

  showPreviousSlide(): void {
    this.showSlide(this.activeSlide - 1);
  }
}
