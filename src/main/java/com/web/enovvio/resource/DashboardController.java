package com.web.enovvio.resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.security.RolesAllowed;

@Controller
@RequestMapping("/access")
public class DashboardController {

    @GetMapping("")
    public String adminDashboard(){
        return "redirect:/home";
    }

    @GetMapping("/home")
    public String dahboard(){
        return "pages/index";
    }

    @GetMapping("/user")
    @RolesAllowed("user")
    public String userDashboard(){
        return "userDashboard";
    }

    @GetMapping("/identity_control")
    public String identityControl(){
        return "/admin/identityControl";
    }

    @GetMapping("/identity_control_get_started")
    public String identityControlGetStarted(){
        return "/admin/identityControlGetStarted";
    }

    @GetMapping("/online_banking_channels")
    public String onlineBankingChannels(){
        return "/admin/onlineBankingChannels";
    }

    @GetMapping("/more_solutions")
    public String moreSolutions(){
        return "/admin/more_solutions";
    }

    @GetMapping("/getting_started")
    public String gettingStarted(){
        return "/admin/gettingStarted";
    }

    @GetMapping("/contact_us")
    public String contactUs(){
        return "/admin/contactUs";
    }

    @GetMapping("/settings")
    public String settings(){
        return "/admin/settings";
    }

    @GetMapping("/secure_plateforme")
    public String a(){
        return "/admin/secure_plateforme";
    }

    @GetMapping("/identity_verification")
    public String b(){
        return "/admin/identity_verification";
    }

    @GetMapping("/global_identity_cyber_protection")
    public String global_identity_cyber_protection(){
        return "/admin/global_identity_cyber_protection";
    }

    @GetMapping("/account_protection_verification")
    public String account_protection_verification(){
        return "/admin/account_protection_verification";
    }

}
